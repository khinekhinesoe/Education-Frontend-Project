const suggestions = ['About','Academics','Computer Science','Computer Tech','Contact','Home'];

function showSuggestions() {
    const input = document.getElementById('search_input');
    const filter = input.value.toLowerCase();
    const suggestionBox = document.getElementById('suggestions');
    suggestionBox.innerHTML = '';
    
    if (filter) {
        const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(filter));
        
        filteredSuggestions.forEach(item => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = item;
            suggestionItem.onclick = () => {
                input.value = item;
                suggestionBox.style.display = 'none';
            };
            suggestionBox.appendChild(suggestionItem);
        });
        
        if (filteredSuggestions.length > 0) {
            suggestionBox.style.display = 'block';
        } else {
            suggestionBox.style.display = 'none';
        }
    } else {
        suggestionBox.style.display = 'none';
    }
}

function search() {
    //const suggestions = ['About','Academics','Computer Science','Computer Tech','Contact','Home'];
    const input = document.getElementById('search_input').value.toLowerCase();
    console.log(input);
    if (input === 'about') 
    {
        window.location.href = '../html/about.html';
    } else if (input === 'academics') 
    {
        window.location.href = '../html/academics.html';
    }
    else if (input === 'computer science')
    {
        window.location.href = '../html/computerscience.html';
    }
    else if(input === 'computer tech')
    {
        window.location.href = '../html/computertech.html';
    } 
    else if(input === 'contact')
    {
        window.location.href = '../html/contact.html';
    }
    else if(input === 'home')
    {
        window.location.href = '../html/home.html';
    }
    else 
    {
        alert('Page not found');
    }
    return false; // Prevent form submission
}
