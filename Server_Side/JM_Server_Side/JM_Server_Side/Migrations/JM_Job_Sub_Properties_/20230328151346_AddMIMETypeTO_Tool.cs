using Microsoft.EntityFrameworkCore.Migrations;

namespace JM_Server_Side.Migrations.JM_Job_Sub_Properties_
{
    public partial class AddMIMETypeTO_Tool : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Tool_Image_MIME_Type",
                table: "Tools",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Tool_Image_MIME_Type",
                table: "Tools");
        }
    }
}
