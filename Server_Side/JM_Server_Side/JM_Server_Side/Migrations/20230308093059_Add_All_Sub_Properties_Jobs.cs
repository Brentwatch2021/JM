using Microsoft.EntityFrameworkCore.Migrations;

namespace JM_Server_Side.Migrations
{
    public partial class Add_All_Sub_Properties_Jobs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Client_ID",
                table: "jobs",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Payslips",
                table: "jobs",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "jobs",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TaskList",
                table: "jobs",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Team",
                table: "jobs",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ToolsUsed",
                table: "jobs",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Vehicles",
                table: "jobs",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Client_ID",
                table: "jobs");

            migrationBuilder.DropColumn(
                name: "Payslips",
                table: "jobs");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "jobs");

            migrationBuilder.DropColumn(
                name: "TaskList",
                table: "jobs");

            migrationBuilder.DropColumn(
                name: "Team",
                table: "jobs");

            migrationBuilder.DropColumn(
                name: "ToolsUsed",
                table: "jobs");

            migrationBuilder.DropColumn(
                name: "Vehicles",
                table: "jobs");
        }
    }
}
