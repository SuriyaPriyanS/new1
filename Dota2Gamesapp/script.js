document.addEventListener('DOMContentLoaded', function() {
    const heroList = document.getElementById('heroList');
    const matchList = document.getElementById('matchList');
  
    // Function to fetch Dota 2 heroes from the Dota 2 API
    async function fetchDota2Heroes() {
      try {
        const response = await fetch('https://api.opendota.com/api/heroes');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('There was a problem fetching Dota 2 heroes:', error);
      }
    }
  
    // Function to display Dota 2 heroes
    async function displayDota2Heroes() {
      const heroes = await fetchDota2Heroes();
      if (heroes) {
        heroes.forEach(hero => {
          const heroItem = document.createElement('li');
          heroItem.classList.add('list-group-item');
          heroItem.textContent = hero.localized_name;
          heroList.appendChild(heroItem);
        });
      }
    }
  
    // Function to fetch recent Dota 2 matches from the Dota 2 API
    async function fetchRecentMatches() {
      try {
        const response = await fetch('https://api.opendota.com/api/publicMatches');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('There was a problem fetching recent Dota 2 matches:', error);
      }
    }
  
    // Function to display recent Dota 2 matches
    async function displayRecentMatches() {
      const matches = await fetchRecentMatches();
      if (matches) {
        matches.slice(0, 5).forEach(match => {
          const matchItem = document.createElement('li');
          matchItem.classList.add('list-group-item');
          matchItem.textContent = `Match ID: ${match.match_id} - Game Mode: ${match.game_mode}`;
          matchList.appendChild(matchItem);
        });
      }
    }
  
    // Display Dota 2 heroes and recent matches when the page loads
    displayDota2Heroes();
    displayRecentMatches();
  });
  