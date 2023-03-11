using Microsoft.EntityFrameworkCore.Migrations;

namespace JM_Server_Side.Migrations.JM_User_Role_
{
    public partial class AddMIMETypeToUserTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ProfilePhotoMIMEType",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProfilePhotoMIMEType",
                table: "Users");
        }
    }
}
