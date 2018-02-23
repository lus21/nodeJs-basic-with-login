import ExamplesModel from'../models/ExamplesModel.js';

const apiExampleHandlers = {};

// Create
apiExampleHandlers.exampleCreate = (req, res) => {
    req.checkBody('example').notEmpty().withMessage('Example is required');
    const errors = req.validationErrors();
    if (errors) {
        return res.json({ errors, createdExample: {},});
    }
    const example = req.body.example;
    const newExample = new ExamplesModel({
        exampleField: example,
    });
    return newExample.save()
        .then((createdExample) => res.json({ createdExample, errors: []}))
        .catch(() => res.json({ errors: [{ msg: 'ErrorCode: 1.0 | Something went wrong.' }], createdExample: {} }));
};

export { apiExampleHandlers as default };