
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookText, Users, Newspaper, Calendar, Download, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import { departmentInfo } from "@/data/departmentInfo";

const featureItems = [
  {
    icon: BookText,
    title: "Courses",
    description: "Browse undergraduate and postgraduate courses offered by the department.",
    link: "/courses"
  },
  {
    icon: Users,
    title: "Faculty",
    description: "Meet our experienced faculty members and research staff.",
    link: "/faculty"
  },
  {
    icon: Newspaper,
    title: "News & Announcements",
    description: "Stay updated with the latest department news and announcements.",
    link: "/news"
  },
  {
    icon: Calendar,
    title: "Events",
    description: "View upcoming seminars, workshops, and important deadlines.",
    link: "/events"
  },
  {
    icon: Download,
    title: "Timetables",
    description: "Download class schedules and academic calendars.",
    link: "/timetable"
  },
  {
    icon: Mail,
    title: "Contact Us",
    description: "Get in touch with the department or provide feedback.",
    link: "/contact"
  }
];

const Index = () => {
  return (
    <Layout>
      <div className="page-container">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-csblue-dark via-csblue to-csblue-light text-white rounded-lg overflow-hidden shadow-lg mb-8">
          <div className="p-6 md:p-10">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/lovable-uploads/b794b8c5-65b8-49d2-960d-b3e53afb6fa1.png" 
                alt="CSS Logo" 
                className="h-16 w-16"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {departmentInfo.name}
                </h1>
                <h2 className="text-xl md:text-2xl font-medium mb-6 opacity-90">
                  {departmentInfo.university}
                </h2>
              </div>
            </div>
            <p className="text-lg opacity-80 max-w-2xl mb-6">
              {departmentInfo.overview}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {featureItems.map((item) => (
            <Link key={item.title} to={item.link} className="group">
              <Card className="h-full transition-all duration-300 group-hover:shadow-md group-hover:border-csblue-light">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-csblue/10 p-3 rounded-full mb-4">
                    <item.icon className="h-8 w-8 text-csblue" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Department Stats & Info */}
        <div className="bg-muted rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Department at a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-csblue">{departmentInfo.statistics.faculty}</p>
              <p className="text-sm text-muted-foreground">Faculty Members</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-csblue">{departmentInfo.statistics.students}</p>
              <p className="text-sm text-muted-foreground">Students</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-csblue">{departmentInfo.statistics.researchGroups}</p>
              <p className="text-sm text-muted-foreground">Research Groups</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-csblue">{departmentInfo.statistics.alumniInTech}</p>
              <p className="text-sm text-muted-foreground">Alumni in Tech</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p>{departmentInfo.mission}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p>{departmentInfo.vision}</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Location:</p>
                <p className="text-muted-foreground">{departmentInfo.location}</p>
              </div>
              <div>
                <p className="font-medium">Address:</p>
                <p className="text-muted-foreground">{departmentInfo.address}</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-muted-foreground">{departmentInfo.email}</p>
              </div>
              <div>
                <p className="font-medium">Phone:</p>
                <p className="text-muted-foreground">{departmentInfo.phone}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;
