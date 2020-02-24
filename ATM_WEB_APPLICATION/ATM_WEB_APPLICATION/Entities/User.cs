using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ATM_WEB_APPLICATION.Entities
{
    public class User
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Mobile { get; set; }
        public double Balance { get; set; }

        public static List<User> Users = new List<User>
            {
                new User { UserName = "A", Password = "1111" ,Balance = 1111 ,Mobile="8611449858"},
                new User { UserName = "B", Password = "2222" ,Balance = 2222,Mobile=""},
                new User { UserName = "C", Password = "3333" ,Balance = 3333,Mobile="8611459848"},
                new User { UserName = "D", Password = "4444" ,Balance = 4444,Mobile=""}
            };
        public User()
        {

        }
    }
}
