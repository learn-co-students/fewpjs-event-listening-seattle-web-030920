function addingEventListener() {
    const input = document.getElementById('input');
    // 1. event type 2. callback to execute
    input.addEventListener('click', function(event) {
    alert('I was clicked!');
    });
}
