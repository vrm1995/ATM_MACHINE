using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ATM_WEB_APPLICATION.Entities
{
    public enum Type { Deposit, Withdraw };
    public class Transaction
    {
        public string UserName { get; set; }
        public double Amount { get; set; }
        public Type Type { get; set; }
        public DateTime Time { get; set; }
        public double Balance { get; set; }

        public static List<Transaction> Transactions = new List<Transaction>()
        {
            new Transaction(){UserName="A",Amount=100.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-10),Balance=911 },
            new Transaction(){UserName="A",Amount=200.00, Type=Type.Withdraw,Time=DateTime.Now.AddDays(-9) ,Balance=711    },
            new Transaction(){UserName="A",Amount=300.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-8),Balance=1011 },
            new Transaction(){UserName="A",Amount=400.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-7),Balance=1411 },
            new Transaction(){UserName="A",Amount=400.00, Type=Type.Withdraw,Time=DateTime.Now.AddDays(-6),Balance=1011 },
            new Transaction(){UserName="A",Amount=300.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-5),Balance=1311 },
            new Transaction(){UserName="A",Amount=200.00, Type=Type.Withdraw,Time=DateTime.Now.AddDays(-4),Balance=1111 },
            new Transaction(){UserName="A",Amount=100.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-3),Balance=1211 },
            new Transaction(){UserName="A",Amount=200.00, Type=Type.Withdraw,Time=DateTime.Now.AddDays(-2)  ,Balance=1011   },
            new Transaction(){UserName="A",Amount=100.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-1),Balance=1111    },

            new Transaction(){UserName="B",Amount=100.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-10),Balance=2022 },
            new Transaction(){UserName="B",Amount=200.00, Type=Type.Withdraw,Time=DateTime.Now.AddDays(-9),Balance=1822     },
            new Transaction(){UserName="B",Amount=300.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-8),Balance=2122 },
            new Transaction(){UserName="B",Amount=400.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-7),Balance=2522 },
            new Transaction(){UserName="B",Amount=400.00, Type=Type.Withdraw,Time=DateTime.Now.AddDays(-6),Balance=2122 },
            new Transaction(){UserName="B",Amount=300.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-5),Balance=2422 },
            new Transaction(){UserName="B",Amount=200.00, Type=Type.Withdraw,Time=DateTime.Now.AddDays(-4),Balance=2222 },
            new Transaction(){UserName="B",Amount=100.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-3),Balance=2322 },
            new Transaction(){UserName="B",Amount=200.00, Type=Type.Withdraw,Time=DateTime.Now.AddDays(-2)  ,Balance=2122   },
            new Transaction(){UserName="B",Amount=100.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-1)  ,Balance=2222  },

            new Transaction(){UserName="C",Amount=100.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-10),Balance=3133 },
            new Transaction(){UserName="C",Amount=200.00, Type=Type.Withdraw,Time=DateTime.Now.AddDays(-9),Balance=2933  },
            new Transaction(){UserName="C",Amount=300.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-8),Balance=3233  },
            new Transaction(){UserName="C",Amount=400.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-7),Balance=3633  },
            new Transaction(){UserName="C",Amount=400.00, Type=Type.Withdraw,Time=DateTime.Now.AddDays(-6),Balance=3233  },
            new Transaction(){UserName="C",Amount=300.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-5),Balance=3533  },
            new Transaction(){UserName="C",Amount=200.00, Type=Type.Withdraw,Time=DateTime.Now.AddDays(-4),Balance=3333  },
            new Transaction(){UserName="C",Amount=100.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-3),Balance=3433  },
            new Transaction(){UserName="C",Amount=200.00, Type=Type.Withdraw,Time=DateTime.Now.AddDays(-2) ,Balance=3233     },
            new Transaction(){UserName="C",Amount=100.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-1) ,Balance=3333   },

            new Transaction(){UserName="D",Amount=100.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-10),Balance=4244},
            new Transaction(){UserName="D",Amount=200.00, Type=Type.Withdraw,Time=DateTime.Now.AddDays(-9) ,Balance=4044   },
            new Transaction(){UserName="D",Amount=300.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-8)  ,Balance=4344  },
            new Transaction(){UserName="D",Amount=400.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-7)  ,Balance=4744  },
            new Transaction(){UserName="D",Amount=400.00, Type=Type.Withdraw,Time=DateTime.Now.AddDays(-6) ,Balance=4344   },
            new Transaction(){UserName="D",Amount=300.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-5) ,Balance=4644   },
            new Transaction(){UserName="D",Amount=200.00, Type=Type.Withdraw,Time=DateTime.Now.AddDays(-4),Balance=4444},
            new Transaction(){UserName="D",Amount=100.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-3)  ,Balance=4544  },
            new Transaction(){UserName="D",Amount=200.00, Type=Type.Withdraw,Time=DateTime.Now.AddDays(-2)  ,Balance=4344  },
            new Transaction(){UserName="D",Amount=100.00, Type=Type.Deposit,Time=DateTime.Now.AddDays(-1) ,Balance=4444   }
        };

    }
}

