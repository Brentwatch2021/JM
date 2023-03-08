namespace JM_Server_Side.Models
{
    public class JM_Job
    {
        public int id { get; set; }

        public string Technician { get; set; }

        public string Activity { get; set; }


        /// <summary>
        /// BAD PRACTISE WORKAROUND string for list of tasks with - break
        /// </summary>
        public string TaskList { get; set; }

        /// <summary>
        /// BAD PRACTISE WORKAROUND string for list of tools used with - break
        /// </summary>
        public string ToolsUsed { get; set; }

        /// <summary>
        /// BAD PRACTISE WORKAROUND string for Team - break
        /// </summary>
        public string Team { get; set; }

        public string Status { get; set; }

        /// <summary>
        /// BAD PRACTISE WORKAROUND string for list of payslips with - break
        /// </summary>
        public string Payslips { get; set; }

        /// <summary>
        /// BAD PRACTISE WORKAROUND string for list of vehicles with - break
        /// </summary>
        public string Vehicles { get; set; }

        public int Client_ID { get; set; }




    }
}
