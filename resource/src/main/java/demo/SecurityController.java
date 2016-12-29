//package demo;
//
//import java.security.Principal;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.ResponseBody;
// 
//@Controller
//public class SecurityController {
// @Autowired
// UserRepository userRepository;
// 
//    @RequestMapping(value = "/username", method = RequestMethod.GET)
//    @ResponseBody
//    public Users currentUserName(Principal principal) {
//    	return userRepository.findByUsername(principal.getName());}
//    
//    @RequestMapping(value = "/username/{id}", method = RequestMethod.DELETE)
//    @ResponseBody
//    public void deleteUser(@PathVariable Long id) {
//   userRepository.delete(id);
//    }
//
//    }
