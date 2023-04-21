const logout = (req, res) => {
  req.clearCookies('token').redirect('/login')
};

module.exports = logout;
