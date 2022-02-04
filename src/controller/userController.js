const User = require('../model/userModel');

module.exports = {
    create: async (req, res) => {
        const {name, age} = req.body;
        try{
            const user = await User.create({
                name,
                age
            })
            return res.status(201).send(user);
        }
        catch(err){
            return res.status(400).send({err: 'caralho mah vacilou'})
        }
    }
}