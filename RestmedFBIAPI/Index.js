// brug gerne den egentlige JSON‑endpoint, API’et ligger på api.fbi.gov
const url = 'https://api.fbi.gov/wanted/v1/list';

axios.get(url)
  .then(({ data }) => render(data))
  .catch(err => {
      console.error('Fejl ved hentning', err);
      document.getElementById('results').textContent = 'Kunne ikke hente data.';
  });

function render(payload) {
    const container = document.getElementById('results');
    const items = payload.items || [];

    if (items.length === 0) {
        container.textContent = 'Ingen posters fundet.';
        return;
    }

    // byg et korthold for hver poster, med en <hr> efter hver række
    container.innerHTML = items.slice(0, 12).map((poster, idx) => {
        const imgUrl = poster.images?.[0]?.thumb;
        const charges = poster.charges?.map(c => c.value).join(', ') || 'ingen oplysninger';
        const desc = poster.description || poster.narrative || 'ingen beskrivelse';

        let card = `
        <div class="col-sm-6 col-md-4">
            <div class="card h-100 shadow-sm mb-4">
                ${imgUrl ? `<img src="${imgUrl}" class="card-img-top" alt="Poster">` : ''}
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${poster.title}</h5>
                    <p class="card-text flex-grow-1">${desc.substring(0, 150)}…</p>
                    <ul class="list-unstyled mb-2">
                        <li><strong>Charges:</strong> ${charges}</li>
                        <li><strong>Aliases:</strong> ${poster.aliases?.join(', ') || 'ingen'}</li>
                    </ul>
                    <a href="${poster.url}" target="_blank" class="btn btn-primary btn-sm mt-auto">Læs mere</a>
                </div>
            </div>
        </div>`;

        // indsæt en skillselinje efter hver 3. element (eller hvornår du vil)
        if ((idx + 1) % 3 === 0) {
            card += '<div class="col-12"><hr class="my-4"></div>';
        }
        return card;
    }).join('');
}