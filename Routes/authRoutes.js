const express = require('express');
const { registerUser, userLogin, getAllUsers, findUsers, createProperty, findProperty, findPropertyById, saveProperty, savedProperties, savedPropertiesById, removeSavedProperty, updateSavedProperty, propertyFilter} = require("../Controllers");
const { validateRegistration, authorization } = require("../Middleware");



const router = express.Router();

router.post ("/register", validateRegistration, registerUser);
router.post("/login", authorization, userLogin);
router.get ("/users", getAllUsers);
router.get("/user/:id",  findUsers);
router.post("/create-property", createProperty);
router.get("/properties", findProperty);
router.get("/properties/:id", findPropertyById);
router.post ("/save-property/:propertyId", saveProperty);
router.get("/saved-properties", savedProperties);
router.get("/saved-property/:id", savedPropertiesById);
router.delete("/remove-saved-property/:id", removeSavedProperty);
router.put("/update-saved-property/:id", updateSavedProperty);
router.get("/properties/filter", propertyFilter);

module.exports = router;

feat: add middleware imports and apply validation and authorization to auth routes

- Imported validateRegistration and authorization middleware from Middleware directory
- Applied validateRegistration to registration route
- Applied authorization to login route
- Ensured all routes are properly structured and exported