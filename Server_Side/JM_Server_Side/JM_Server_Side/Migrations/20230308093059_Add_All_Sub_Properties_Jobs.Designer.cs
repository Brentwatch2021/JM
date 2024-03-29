﻿// <auto-generated />
using JM_Server_Side.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace JM_Server_Side.Migrations
{
    [DbContext(typeof(JM_Job_Context))]
    [Migration("20230308093059_Add_All_Sub_Properties_Jobs")]
    partial class Add_All_Sub_Properties_Jobs
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.32")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("JM_Server_Side.Models.JM_Job", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Activity")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Client_ID")
                        .HasColumnType("int");

                    b.Property<string>("Payslips")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TaskList")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Team")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Technician")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ToolsUsed")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Vehicles")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("jobs");
                });
#pragma warning restore 612, 618
        }
    }
}
