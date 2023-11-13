// Only show the current part of the click venture; hid the rest

function showPath(id) {
    // Hide all story parts
    var storyParts = document.getElementsByClassName('story-part');
    for (var i = 0; i < storyParts.length; i++) {
        storyParts[i].classList.add('hidden');
    }

    // Show the selected story part
    document.getElementById(id).classList.remove('hidden');
}

function openChest() {
    // Implement logic for opening the chest
}

function leaveCave() {
    // Implement logic for leaving the cave
}