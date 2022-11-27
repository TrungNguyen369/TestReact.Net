using backend.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers
{
    [RoutePrefix("api/test")]
    public class TestController : ApiController
    {
        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);
        SqlCommand cmd = null;
        SqlDataAdapter dataAdapter= null;

        [HttpPost]
        [Route("Registrantion")]
        public string Registrantion(Employee employee)

        {
            string msg = String.Empty;
            try
            {
                cmd = new SqlCommand("usp_Registration", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Name", employee.Name);
                cmd.Parameters.AddWithValue("@PhoneNo", employee.PhoneNo);
                cmd.Parameters.AddWithValue("@Address", employee.Address);
                cmd.Parameters.AddWithValue("@IsActives", employee.IsActives);

                conn.Open();
                int i = cmd.ExecuteNonQuery();
                conn.Close();

                if (i > 0)
                {
                    msg = "Date inserted";
                }
                else
                {
                    msg = "Error";
                }
            }
            catch(Exception ex)
            {
                msg = ex.Message;
            }
           
            return msg;
        }

        [HttpPost]
        [Route("Login")]
        public string Login(Employee employee)
        {
            string msg = String.Empty;
            try
            {
                dataAdapter= new SqlDataAdapter("usp_Login", conn);
                dataAdapter.SelectCommand.CommandType = CommandType.StoredProcedure;
                dataAdapter.SelectCommand.Parameters.AddWithValue("@Name", employee.Name);
                dataAdapter.SelectCommand.Parameters.AddWithValue("@PhoneNo", employee.PhoneNo);
                DataTable dataTable= new DataTable();
                dataAdapter.Fill(dataTable);
                if(dataTable.Rows.Count > 0)
                {
                    msg = "User is vaild";
                }
                else
                {
                    msg = "User is Invaild";
                }
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }

            return msg;
        }
    }
}
