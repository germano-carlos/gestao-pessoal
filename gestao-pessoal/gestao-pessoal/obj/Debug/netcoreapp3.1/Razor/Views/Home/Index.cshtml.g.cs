#pragma checksum "C:\www\gestao-pessoal\gestao-pessoal\gestao-pessoal\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "01f851a332f0f5b1a0ce33c3d2a267776aab79b7"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\www\gestao-pessoal\gestao-pessoal\gestao-pessoal\Views\_ViewImports.cshtml"
using gestao_pessoal;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\www\gestao-pessoal\gestao-pessoal\gestao-pessoal\Views\_ViewImports.cshtml"
using gestao_pessoal.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"01f851a332f0f5b1a0ce33c3d2a267776aab79b7", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e67a7ef41658da6cfe414ce2104dcb6ff63815c1", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal m-t-30"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("action", new global::Microsoft.AspNetCore.Html.HtmlString("index.html"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral(@"
<div class=""home-btn d-none d-sm-block"">
    <a href=""index.html"" class=""text-white""><i class=""fas fa-home h2""></i></a>
</div>

<!-- Begin page -->
<div class=""accountbg""></div>

<div class=""wrapper-page account-page-full"">

    <div class=""card"">
        <div class=""card-body"">

            <div class=""text-center"">
                <a href=""index.html"" class=""logo""><img src=""assets/images/logo-light.png"" height=""22"" alt=""logo""></a>
            </div>

            <div class=""p-3"">
                <h4 class=""font-18 m-b-5 text-center"">Bem vindo de volta</h4>
                <p class=""text-muted text-center"">Faça Login para utilizar do Gestão Pessoal</p>

                ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "01f851a332f0f5b1a0ce33c3d2a267776aab79b74658", async() => {
                WriteLiteral(@"

                    <div class=""form-group"">
                        <label for=""username"">Username</label>
                        <input type=""text"" class=""form-control"" id=""username"" placeholder=""Insira seu usuário"">
                    </div>

                    <div class=""form-group"">
                        <label for=""userpassword"">Password</label>
                        <input type=""password"" class=""form-control"" id=""userpassword"" placeholder=""Insira sua Senha"">
                    </div>

                    <div class=""form-group row m-t-20"">
                        <div class=""col-sm-6"">
                            <div class=""custom-control custom-checkbox"">
                                <input type=""checkbox"" class=""custom-control-input"" id=""customControlInline"">
                                <label class=""custom-control-label"" for=""customControlInline"">Lembrar de mim</label>
                            </div>
                        </div>
                        <div");
                WriteLiteral(@" class=""col-sm-6 text-right"">
                            <button class=""btn btn-primary w-md waves-effect waves-light"" type=""submit"">Login</button>
                        </div>
                    </div>

                    <div class=""form-group m-t-10 mb-0 row"">
                        <div class=""col-12 m-t-20"">
                            <a href=""pages-recoverpw-2.html""><i class=""mdi mdi-lock""></i> Esqueceu a sua senha?</a>
                        </div>
                    </div>
                ");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"
            </div>

        </div>
    </div>

    <div class=""m-t-40 text-center"">
        <p>Não possui Conta? <a href=""pages-register-2.html"" class=""font-500 text-primary""> Cadastre Agora </a> </p>
        <p>© 2020 Gestão Pessoal.
    </div>

</div>
<!-- end wrapper-page -->
<!-- jQuery  -->
<script src=""assets/js/jquery.min.js""></script>
<script src=""assets/js/bootstrap.bundle.min.js""></script>
<script src=""assets/js/jquery.slimscroll.js""></script>
<script src=""assets/js/waves.min.js""></script>

<!-- App js -->
<script src=""assets/js/app.js""></script>
");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591