    window.onload = function() {
        var submitButton = document.querySelector('.buttons a[href="forumhome2.html"] button');
        var likeButton = document.getElementById('likeButton');
        var saveButton = document.getElementById('saveButton');
    
        submitButton.onclick = function() {
            alert('Your new thread has been saved.');
        }
    
        likeButton.onclick = function() {
            alert('Your like has been saved.');
        }
    
        saveButton.onclick = function() {
            alert('Thread has been saved.');
        }
    }