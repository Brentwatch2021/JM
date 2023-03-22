using JM_Server_Side.Models;
using JM_Server_Side.Models.JM_Job_Sub_Properties_Context;
using JM_Server_Side.Models.JM_User_Role_Context_Lib;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace JM_Server_Side
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();


            services.AddDbContext<JM_Job_Context>(jmopt =>  
                jmopt.UseSqlServer(Configuration.GetConnectionString("JMCon")));

            services.AddDbContext<JM_Job_Sub_Properties_Context>(jmopt =>
                jmopt.UseSqlServer(Configuration.GetConnectionString("JMCon")));

            services.AddDbContext<JM_User_Role_Context>(jmopt => 
                jmopt.UseSqlServer(Configuration.GetConnectionString("JMCon"))
                );



            services.AddCors(opt =>
            {
                opt.AddPolicy(name:"CorsPolicy",builder => 
                {
                    //builder.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod().AllowCredentials();
                    builder.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod().AllowCredentials();
                });   
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(),@"UserUploadedData")),
                RequestPath = new PathString("/UserUploadedData")
            });;

            app.UseCors("CorsPolicy");

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
