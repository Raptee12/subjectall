const TeacherModel = require('../models/TeacherModel')
const userModels = require('../models/userModels')

const getAddTeacherController = async (req,res) => {
    try {
        const AddTeacher = await userModels.find({})
        res.status(200).send({
            success:true,
            message:'Teachers Data',
            data:AddTeacher,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error while getting teachers data',
            error
        })
    }
}

const getUpdateTeacherController = async (req,res) => {
    try {
        const UpdateTeacher = await TeacherModel.find({})
        res.status(200).send({
            success:true,
            message:'Teacher Data List',
            data:UpdateTeacher,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error while updating teachers',
            error
    })
}
}

module.exports = { getAddTeacherController, getUpdateTeacherController}