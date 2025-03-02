import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import styles from "./HomePageWebPart.module.scss"; // Ensure this path is correct
import * as strings from "HomePageWebPartStrings";

export interface IHpWebPartProps {
  description: string;
}

export default class HpWebPart extends BaseClientSideWebPart<IHpWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `
      ${this.renderHeader()}
      ${this.renderHeroSection()}
      ${this.renderAboutSection()}
      ${this.renderBlogSection()}
      ${this.renderCoursesSection()}
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1>Welcome to the Training Portal</h1>
        <p>This site provides training reports and admin management tools.</p>
        <nav style="margin-top: 20px;">
          <a href="${
            this.context.pageContext.web
          }" style="margin-right: 15px;"></a>
          <a href="/sites/training/AdminPage"></a>
        </nav>


     

<div style="padding: 20px;">
        <h2>Admin Portal</h2>
        <iframe
          src="https://apps.powerapps.com/play/e/default-a34ee11b-3a38-48f3-a134-8ab4c90e79e9/a/8d04a976-f16f-40d3-b048-6bd457883934?tenantId=a34ee11b-3a38-48f3-a134-8ab4c90e79e9&hint=f552b8ae-e548-4621-b88f-3cfa793f41e5&sourcetime=1740809289269{8d04a976-f16f-40d3-b048-6bd457883934}"
          width="100%"
          height="600px"
          style="border: none;"
        ></iframe>
      </div>

    `;
  }

  private renderHeader(): string {
    return `
      <header class="${styles.header}">
        <div class="${styles.container}">
          <div class="${styles.logo}">
            <img src="${this.context.pageContext.web.absoluteUrl}/assets/LOGO.png" alt="Capgemini Logo">
          </div>
          <div class="${styles.Search}">
            <img src="${this.context.pageContext.web.absoluteUrl}/SiteAssets/Search.png" alt="Search Icon">
          </div>
          <div class="${styles["header-buttons"]}">
            <button>Raise a Ticket</button>
            <div class="${styles["user-profile"]}">
              <img src="${this.context.pageContext.web.absoluteUrl}/SiteAssets/Noti_Normal.png" alt="User Profile">
            </div>
            <div class="${styles.cart}">
              <img src="${this.context.pageContext.web.absoluteUrl}/SiteAssets/cart_normal.png" alt="Cart Icon">
            </div>
            <div class="${styles.Bell}">
              <img src="${this.context.pageContext.web.absoluteUrl}/SiteAssets/Profile.png" alt="Notification Icon">
            </div>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Administration</a></li>
          </ul>
        </nav>
      </header>
    `;
  }

  private renderHeroSection(): string {
    return `
      <section class="${styles.hero}">
        <div class="${styles.container}">
          <div class="${styles["hero-content"]}">
            <h1>Start Your Learning Journey Today</h1>
            <p>Grow with our comprehensive online learning platform.</p>
          </div>
          <div class="${styles["hero-image"]}">
            <img src="${this.context.pageContext.web.absoluteUrl}/SiteAssets/BANNER IMAGE.png" alt="Learning Image">
          </div>
        </div>
      </section>
    `;
  }

  private renderAboutSection(): string {
    return `
      <section class="${styles.about}">
        <div class="${styles.container}">
         <div class="${styles["about-image"]}">
            <img src="${this.context.pageContext.web.absoluteUrl}/SiteAssets/Group 16128.png" alt="Online Learning Image">
          </div>
          
          <div class="${styles["about-content"]}">
            <h2>Discover Our Online Learning Programs</h2>
            <p>Dive into an array of meticulously crafted courses.</p>
            <ul>
              <li>Seamless Scheduling</li>
              <li>Service Guarantee</li>
              <li>Integrated Collaboration</li>
            </ul>
            <button>Discover More</button>
          </div>
         
        </div>
      </section>
    `;
  }

  private renderBlogSection(): string {
    return `
      <section class="${styles.blog}">
        <div class="${styles.container}">
          <h2>Our Latest News & Blog</h2>
          <div class="${styles["blog-item"]}">
            <div class="${styles["blog-item"]}">
              <img src="${this.context.pageContext.web.absoluteUrl}/SiteAssets/01.png" alt="Top 10 Skills Blog">
              <h3>Top 10 Skills to Thrive in the Digital Age</h3>
              <p>By John, August 25, 2023</p>
            </div>
            <div class="${styles["blog-item"]}">
              <img src="${this.context.pageContext.web.absoluteUrl}/SiteAssets/02.png" alt="Remote Learning Blog">
              <h3>Navigating the Future of Remote Learning</h3>
              <p>By Natasha, June 12, 2023</p>
            </div>
            <div class="${styles["blog-item"]}">
              <img src="${this.context.pageContext.web.absoluteUrl}/SiteAssets/03.png" alt="Web Design Blog">
              <h3>What Leonardo Teaches us About Web Design</h3>
              <p>By William, July 29, 2023</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private renderCoursesSection(): string {
    return `
      <section class="${styles.courses}">
        <div class="${styles.container}">
          
          <div class="${styles["courses-container"]}">
            <div class="${styles["courses-text"]}">
            <h2>Find Your Path with Our Online Courses</h2>
          <p>Embark on a personalized journey of growth and discovery with our expert-guided courses.</p>
              <ul>
                <li>Personalized Learning Paths</li>
                <li>Interactive Course Materials</li>
                <li>Expert Instructor Support</li>
              </ul>
              <button>Discover More</button>
            </div>
            <div class="${styles["courses-image"]}">
            
              <img src="${this.context.pageContext.web.absoluteUrl}/SiteAssets/Group16129.png" alt="Courses Overview Image">
            </div>
          </div>
        </div>
      </section>
    `;
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: { description: strings.PropertyPaneDescription },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}

