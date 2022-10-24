using Contentful.AspNetCore;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualBasic;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "ClientApp/dist";
});
builder.Services.AddContentful(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.UseSpaStaticFiles();
app.MapRazorPages();

app.UseEndpoints(endpoints =>
{
    // In DEV, to enable SSR, you have to set  "outputHashing": "all" to "none" in angular.json "build" section.
    if (true)
    {
        endpoints.MapControllerRoute(
           name: "default",
           pattern: "{controller}/{action=Index}/{id?}"
       );
    }
    else
    {
        endpoints.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}"
            );

        endpoints.MapFallbackToController("Index", "Home");
    }
});

app.UseSpa(spa =>
{
    spa.Options.SourcePath = "ClientApp";

    if (app.Environment.IsDevelopment())
    {
        //spa.UseAngularCliServer(npmScript: "start");
        spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
    }

});

app.Run();
