# Capgemini-Assesment
This project is a SharePoint Framework (SPFx) solution that includes three web parts: Home Page, Report Page, and Admin Page. The Admin Page integrates a Power App for CRUD operations. Home Page:

Displays a welcome message and a brief description.

Report Page:

Displays dynamic reports from the TrainingReports SharePoint list.

Admin Page:

Embeds a Power App for managing training data. Supports Create, Read, Update, and Delete (CRUD) operations.

Prerequisites SharePoint Online (Office 365 Tenant). Node.js (LTS version recommended). Gulp CLI installed globally: npm install -g gulp

SPFx Yeoman Generator installed globally: npm install -g @microsoft/generator-sharepoint

Build the Project To build the project, run: gulp bundle --ship

Package the Solution To create the deployable package: gulp package-solution --ship The package will be located in the sharepoint/solution folder.

Deploy the Package Navigate to your SharePoint App Catalog:

Upload the .sppkg file to the Apps for SharePoint library. Click Deploy when prompted.

Add to a Site Go to the SharePoint site where you want to add the web parts. Navigate to Site Contents > Add an App. Add your SPFx solution.

Troubleshooting Web Part Not Appearing: Ensure the solution is deployed and added to the site. Power App Not Displaying: Verify the Power App ID and user permissions

Deploy WebPart Link- https://sczgh.sharepoint.com/:u:/r/sites/Camgemini/SitePages/WebPart.aspx?csf=1&web=1&share=ET4d58oroqhIgg3F7VPBKUgBWJEbh7eylLS65FJXOdCvtQ&e=a8cBRE SharePoint Site URL- https://twtfy.sharepoint.com/sites/TrainingData/Lists/Training%20Data/AllItems.aspx

Local Workbench Url- https://twtfy.sharepoint.com/sites/TrainingData/_layouts/15/workbench.aspx

Report Page Local Workbench Url- https://twtfy.sharepoint.com/sites/TrainingData/_layouts/15/workbench.aspx

I faced challenges to link report page and still data not fatch in same tab and also face challenges in blog container to design all images horizontaly (use display flex but still not set).Some CSS error

Embedding Power Apps Challenges: Power Apps may not render correctly in the SharePoint Power Apps web part. Troubleshooting embedded app permissions or App ID issues. Solution: Ensure the App ID is correct and properly configured in the Power Apps web part. Check if the current user has access to the Power App.

Deploying to the App Catalog Challenges: App Catalog may not exist or may not be accessible. Uploading the .sppkg file might fail due to invalid configurations or permissions. Solution: Confirm the App Catalog is enabled: Tenant-wide: Admin must create it via the SharePoint Admin Center. Site-specific: Use PowerShell to enable the App Catalog for site collections.

POWER APP

I take container for delete confirmation pop message (Set the Visible property of the container) Code - ShowConfirm

set the OnSelect property of the Delete button to: Set(ShowConfirm,true);Set(SelectedID,ThisItem.ID);

In this conatinmer I take a text lable of msg (“Are You sure to delete this record”) And take 2 button (yes, no)

Set On yes button of OnSelect property: Remove('Training Data', LookUp('Training Data',ID=SelectedID)); Set(ShowConfirm, false); Notify("Item deleted successfully!", NotificationType.Success);

Set on No button of OnSelect property: Set(ShowConfirm,false)
