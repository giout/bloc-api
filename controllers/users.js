import User from '../models/users.js'

export const getUsers = async (req, res) => {
    const users = await User.find()    

    res.json(users)
}

export const createUser = async (req, res) => {
    const { username, password, email } = req.body

    const user = new User({
        username,
        password, 
        email
    })

    await user.save()

    res.status(201).end()
}

export const updateUser = async (req, res) => {
    const { username, password, email } = req.body

    await User.findByIdAndUpdate(
        req.params.id,
        { 
            username, 
            password, 
            email 
        }        
    )
    
    res.status(200).end()
}

export const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)

    res.status(200).end()
}