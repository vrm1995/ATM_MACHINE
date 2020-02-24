using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ATM_WEB_APPLICATION.Controllers
{
    [Route("api/[controller]")]
    public class TransactionController : Controller
    {
        [HttpGet("[action]")]
        public double GetBalance(string username)
        {
            return Entities.User.Users.Where(x => x.UserName == username).SingleOrDefault().Balance;
        }

        [HttpGet("[action]")]
        public double Withdraw(string username, double amount)
        {
            var user = Entities.User.Users.Where(x => x.UserName == username).SingleOrDefault();
            if (user.Balance >= amount)
            {
                user.Balance -= amount;

                Entities.Transaction.Transactions.Add(
                new Entities.Transaction()
                {
                    UserName = username,
                    Type = Entities.Type.Withdraw,
                    Time = DateTime.Now,
                    Amount = amount,
                    Balance = user.Balance

                });
            }
            return user.Balance;
        }

        [HttpGet("[action]")]
        public double Deposit(string username, double amount)
        {
            var user = Entities.User.Users.Where(x => x.UserName == username).SingleOrDefault();

            user.Balance += amount;

            Entities.Transaction.Transactions.Add(
                new Entities.Transaction()
                {
                    UserName = username,
                    Type = Entities.Type.Deposit,
                    Time = DateTime.Now,
                    Amount = amount,
                    Balance = user.Balance
                });

            return user.Balance;
        }


        [HttpGet("[action]")]
        public IEnumerable<Entities.Transaction> Transactions(string username)
        {
            return Entities.Transaction.Transactions.Where(x => x.UserName == username)
                .OrderByDescending(x => x.Time).Take(10);
        }



    }
}
