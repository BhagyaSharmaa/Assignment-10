const express = require('express');
const Course = require('../models/courseSchema');
const router = express.Router();

// 1. Add a new course
router.post('/', async (req, res) => {
    try {
        const { name, description, duration } = req.body;

        const newCourse = new Course({ name, description, duration });
        const savedCourse = await newCourse.save();

        res.status(201).json({ data: savedCourse });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

// 2. Get all courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json({ data: courses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// 3. 

module.exports = router;
