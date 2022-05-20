module.exports.home = async function(req, res){
    if(!req.user){
        req.flash('error',"You Are not Logged in Please Log-in before Going to the  Home Page" );
        return res.redirect('/users/sign-in')
    }
    else
        return res.render('home',{
            title: "Home",
            
        });

}