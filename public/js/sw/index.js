self.addEventListener('fetch', function(event) {
    event.respondWith(
        new Response('<strong class="a-winner-is-me"> Hello! We are sending customized response.</strong>',{
                headers:{'Content-Type': 'text/html'}
        })
    );
});