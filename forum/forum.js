    window.onload = function() {
        var likeButton = document.getElementById('likeButton');
        var saveButton = document.getElementById('saveButton');
        var submitButton = document.getElementById('submitButton');

        function showAlert(message) {
            alert(message);
        }

        likeButton.onclick = function() {
            showAlert('Like has been saved.');
        }

        saveButton.onclick = function() {
            showAlert('Thread has been saved.');
        }

        submitButton.onclick = function() {
            showAlert('Your new thread has been saved.');
        }
    }