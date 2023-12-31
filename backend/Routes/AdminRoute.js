import express from 'express'
import { loginAdmin, registerAdmin, updateAdmin } from '../DAO/AdminDAO.js'

const router  = express.Router()

router.post('/reg', registerAdmin)
router.get('/', loginAdmin)
router.put('/update/:id', updateAdmin)

export default router