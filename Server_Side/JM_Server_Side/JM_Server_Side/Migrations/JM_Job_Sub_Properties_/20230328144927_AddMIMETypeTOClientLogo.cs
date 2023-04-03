using Microsoft.EntityFrameworkCore.Migrations;

namespace JM_Server_Side.Migrations.JM_Job_Sub_Properties_
{
    public partial class AddMIMETypeTOClientLogo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Client_Logo_MIME_Type",
                table: "Clients",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Client_Logo_MIME_Type",
                table: "Clients");
        }
    }
}
