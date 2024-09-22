const kllen = {
    dale: (req, res) => {
        res.render('index');
       
    },
    mar: (req, res) => {
        res.render('name');
        
    },
    car: (req, res) => {
        res.render('middle');
      
    },
    ingal: (req, res) => {
        res.render('last');
       
    },
    man: (req, res) => {
        res.render('love');
      
    }
}

module.exports = kllen;
