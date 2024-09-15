import { Router } from "express";
const router = Router();

// Array para almacenar carts
const carts = [];

router.get("/api/carts", (req, res) => {
	res.json(carts);
})

router.post("/api/carts", (req, res) => {

})


export default router;