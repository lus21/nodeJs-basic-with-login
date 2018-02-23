const ExamplesModel = require('../models/ExamplesModel');

const exampleHandlers = {};

// Example get
exampleHandlers.exampleAction = (req, res) => {
    res.render('pages/example/example.pug', {
        title: "Example Page Ttile",
    });
};
// Show profile page
exampleHandlers.showProfile = (req, res) => {
    const user = req.session.user;
    if (!user) {
        return res.redirect('/auth/')
    }
    res.render('pages/example/profile.pug', {
        title: "Profile Page",
        user,
    });
};
// Show profile Settings page
exampleHandlers.showProfileSettings = (req, res) => {
    const user = req.session.user;
    res.render('pages/example/profileSettings.pug', {
        title: "Profile Settings Page",
        user,
    });
};

export { exampleHandlers as default };