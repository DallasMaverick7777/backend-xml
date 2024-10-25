const parseXMLDatabase = require('./data/parseXMLDatabase'); // Replace with the actual path to your module
const express = require('express');
const cors = require('cors');
// const exportXMLDatabase = require('./export/exportXMLDatabase'); // Replace with the actual path to your module
const app = express();
const port = 3000;

app.use(cors());

app.get('/data', (req, res) => {
    parseXMLDatabase('./phones.xml', (err, result) => {
        if (err) {
            console.error('Error parsing XML:', err);
            res.status(500).send('Error parsing XML');
        } else {
            res.json(result);
        }
    });
});

// app.get('/export', (req, res) => {
//     exportXMLDatabase((err, result) => {
//         if (err) {
//             console.error('Error exporting XML:', err);
//             res.status(500).send('Error exporting XML');
//         } else {
//             res.send('XML exported successfully');
//         }
//     });
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
