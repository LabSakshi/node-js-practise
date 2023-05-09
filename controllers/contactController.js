

class contactRoutesController {
    constructor() {

    }
    //@description Get all contact
    //@route GET/api/contact
    //@access public
    getContact = (req, res) => {
        res.status(200).json({ message: 'hellow from countact routes' })
    }

    //@description POST contact
    //@route POST/api/contact
    //@access public
    postContact = (req, res) => {
        console.log("this req body is", req.body)
        const { name, email, phn } = req.body;
        if (!name || !email || !phn) {
            res.status(400)
            throw new Error("All feilds are mandatory")
        }
        res.status(200).json({ message: 'Contact has been created' })
    }

    //@description UPDATE/ PUT all contact
    //@route PUT/api/contact
    //@access public
    updateContact = (req, res) => {
        res.status(200).json({ message: `Contact has been updated ${req.params.id}` })
    }

    //  //@description Get all contact
    // //@route GET/api/contact
    // //@access public
    // getContact = (req, res) => {
    //     res.status(200).json({ message: 'hellow from countact routes' })
    // }

    //  //@description Get all contact
    // //@route GET/api/contact
    // //@access public
    // getContact = (req, res) => {
    //     res.status(200).json({ message: 'hellow from countact routes' })
    // }
}
const contactController = new contactRoutesController

module.exports = contactController