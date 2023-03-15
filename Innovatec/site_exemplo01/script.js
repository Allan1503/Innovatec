<script>
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const recipes = document.querySelectorAll('.recipe');

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const searchTerm = searchInput.value.toLowerCase();

    recipes.forEach((recipe) => {
      const title = recipe.querySelector('h2').innerText.toLowerCase();
      const description = recipe.querySelector('p').innerText.toLowerCase();

      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        recipe.style.display = 'block';
      } else {
        recipe.style.display = 'none';
      }
    });
  });
</script>
