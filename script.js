const endpoint = './timeline.json'
const options = {
  start_at_slide: 0, 
  initial_zoom: 4,
  hash_bookmark: true
}

fetch(endpoint)
  .then(res => res.json())
  .then(data => window.timeline = new TL.Timeline('timeline-embed', data, options))