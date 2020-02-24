using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ATM_WEB_APPLICATION.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        [HttpGet("[action]")]
        public bool Autheticate(string username, string password)
        {
            try
            {
                var user = Entities.User.Users.Where(x => x.UserName == username
                  && x.Password == password).SingleOrDefault();
                return true;
            }
            catch 
            {
                return false;
            }

        }

        [HttpGet("[action]")]
        public Entities.User GetDetails(string username)
        {
            return Entities.User.Users.Where(x => x.UserName == username).SingleOrDefault();
        }


        [HttpGet("[action]")]
        public Entities.User UpdateDetails(Entities.User user)
        {
            var result = Entities.User.Users.Where(x => x.UserName == user.UserName).SingleOrDefault();
            result.Mobile = user.Mobile;
            return result;
        }



    }
}
