const router = require("express").Router();

const emailActivationHandler = require("../controllers/public/emailActivation_controller");
const forgotPasswordHandler = require("../controllers/public/forgotPassword_controller");
const resetPasswordHandler = require("../controllers/public/resetPassword_controller");
const signinHandler = require("../controllers/public/signIn_controller");
const signupHandler = require("../controllers/public/signUp_controller");

router.get("/", (req, res) => {
  res.json("Auth Working");
});

router.post("/signup", signupHandler); //name,password,email
router.post("/signin", signinHandler); //password,email
router.post("/forgot-password", forgotPasswordHandler); //email
router.post("/reset-password", resetPasswordHandler); //newPassword
router.post("/emailActivation", emailActivationHandler); //activationId

module.exports = router;