using Microsoft.EntityFrameworkCore.Migrations;

namespace JM_Server_Side.Migrations.JM_Job_Sub_Properties_
{
    public partial class AddRegNumberToJMVehicle : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "RegNumber",
                table: "Vehicles",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RegNumber",
                table: "Vehicles");
        }
    }
}
