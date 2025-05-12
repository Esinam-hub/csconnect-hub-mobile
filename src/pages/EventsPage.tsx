
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Search } from "lucide-react";
import Layout from "@/components/Layout";
import { events, Event } from "@/data/events";
import { format, parseISO, isFuture, isPast } from "date-fns";

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filterEvents = (eventsList: Event[]) => {
    return eventsList.filter(event =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const sortedEvents = [...events].sort((a, b) => 
    new Date(`${a.date}T${a.startTime}`).getTime() - 
    new Date(`${b.date}T${b.startTime}`).getTime()
  );

  const upcomingEvents = sortedEvents.filter(event => 
    isFuture(new Date(`${event.date}T${event.endTime}`))
  );
  
  const pastEvents = sortedEvents.filter(event => 
    isPast(new Date(`${event.date}T${event.endTime}`))
  ).reverse();

  const filteredUpcomingEvents = filterEvents(upcomingEvents);
  const filteredPastEvents = filterEvents(pastEvents);

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'seminar':
        return 'bg-blue-100 text-blue-800';
      case 'workshop':
        return 'bg-green-100 text-green-800';
      case 'deadline':
        return 'bg-red-100 text-red-800';
      case 'social':
        return 'bg-purple-100 text-purple-800';
      case 'competition':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const renderEventCard = (event: Event) => (
    <Card key={event.id} className="overflow-hidden">
      <div className="md:flex">
        {event.imageUrl && (
          <div className="md:w-1/3 h-48 md:h-auto">
            <img 
              src={event.imageUrl} 
              alt={event.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className={`${event.imageUrl ? 'md:w-2/3' : 'w-full'}`}>
          <CardHeader className="pb-2">
            <Badge className={getEventTypeColor(event.type)}>
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </Badge>
            <CardTitle>{event.title}</CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-3 mb-4">
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{format(parseISO(event.date), 'MMMM d, yyyy')}</span>
              </div>
              
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{event.startTime} - {event.endTime}</span>
              </div>
              
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>{event.location}</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">
              {event.description.length > 150 
                ? `${event.description.substring(0, 150)}...` 
                : event.description
              }
            </p>
            
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-sm">
                <span className="text-muted-foreground">Organized by: </span>
                <span className="font-medium">{event.organizer}</span>
              </div>
              
              {event.registrationRequired && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="text-csblue hover:text-csblue-dark hover:bg-csblue/10"
                >
                  <a href={event.registrationUrl || "#"} target="_blank" rel="noopener noreferrer">
                    Register
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
  
  return (
    <Layout>
      <div className="page-container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Events</h1>
          <p className="text-muted-foreground">
            Upcoming events, seminars, workshops, and important deadlines.
          </p>
        </div>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search events by title, description, or type"
            className="pl-10"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="upcoming" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming">
            <div className="space-y-6">
              {filteredUpcomingEvents.length > 0 ? (
                filteredUpcomingEvents.map(renderEventCard)
              ) : (
                <p className="text-center py-8 text-muted-foreground">No upcoming events match your search.</p>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="past">
            <div className="space-y-6">
              {filteredPastEvents.length > 0 ? (
                filteredPastEvents.map(renderEventCard)
              ) : (
                <p className="text-center py-8 text-muted-foreground">No past events match your search.</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default EventsPage;
