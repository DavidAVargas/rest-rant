const React = require('react');

function Def({ html }) {
  return (
    <html>
      <head>
        <title>Title</title>
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
        <link rel='stylesheet' href='public/css/style.css'/>
      </head>
      <body>
        {html}
        {/* Bootstrap JavaScript (bundle includes Popper.js) */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}

module.exports = Def;
