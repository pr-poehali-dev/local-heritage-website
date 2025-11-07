import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedEvent, setSelectedEvent] = useState(0);

  const sections = [
    { id: 'hero', label: 'Главная', icon: 'Home' },
    { id: 'history', label: 'История', icon: 'BookOpen' },
    { id: 'monuments', label: 'Памятники', icon: 'Landmark' },
    { id: 'events', label: 'События', icon: 'Calendar' },
    { id: 'gallery', label: 'Галерея', icon: 'Image' },
  ];

  const timelineEvents = [
    {
      year: '1150',
      title: 'Основание поселения',
      description: 'Первые упоминания о поселении в летописных источниках',
      period: 'Древняя Русь'
    },
    {
      year: '1380',
      title: 'Участие в Куликовской битве',
      description: 'Воины нашего края сражались на поле Куликовом',
      period: 'Средневековье'
    },
    {
      year: '1703',
      title: 'Строительство первой церкви',
      description: 'Возведена деревянная церковь Покрова Пресвятой Богородицы',
      period: 'Петровская эпоха'
    },
    {
      year: '1812',
      title: 'Отечественная война',
      description: 'Ополченцы края участвовали в изгнании захватчиков',
      period: 'XIX век'
    },
    {
      year: '1941-1945',
      title: 'Великая Отечественная война',
      description: 'Тысячи жителей ушли на фронт, сотни не вернулись',
      period: 'XX век'
    },
    {
      year: '2000',
      title: 'Современное развитие',
      description: 'Открытие исторического музея и реставрация памятников',
      period: 'Современность'
    },
  ];

  const monuments = [
    {
      title: 'Памятник героям войны',
      year: '1965',
      description: 'Мемориальный комплекс воинам, павшим в годы Великой Отечественной войны'
    },
    {
      title: 'Старинная церковь',
      year: '1703',
      description: 'Памятник деревянного зодчества XVIII века'
    },
    {
      title: 'Усадьба купца Иванова',
      year: '1850',
      description: 'Образец купеческой архитектуры XIX века'
    },
  ];

  const galleryImages = [
    { title: 'Центральная площадь', era: '1900-е' },
    { title: 'Старая церковь', era: '1920-е' },
    { title: 'Городская ратуша', era: '1950-е' },
    { title: 'Парк культуры', era: '1970-е' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm shadow-lg z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-bold text-primary-foreground">
              История родного края
            </h1>
            <div className="hidden md:flex gap-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === section.id
                      ? 'bg-accent text-accent-foreground'
                      : 'text-primary-foreground hover:bg-primary-foreground/10'
                  }`}
                >
                  <Icon name={section.icon as any} size={18} />
                  <span>{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-24 pb-16 px-4 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto text-center animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground mb-6">
            Наследие веков
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Откройте для себя богатую историю нашего края — от древних времён до современности
          </p>
          <Button 
            onClick={() => scrollToSection('history')}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Начать путешествие
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="history" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 animate-fade-in">
            Историческая лента времени
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ключевые события, которые сформировали облик нашего края
          </p>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/30 hidden md:block"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    <div className="flex-1">
                      <Card 
                        className={`cursor-pointer transition-all hover:shadow-xl hover:scale-105 ${
                          selectedEvent === index ? 'ring-2 ring-accent' : ''
                        }`}
                        onClick={() => setSelectedEvent(index)}
                      >
                        <CardContent className="p-6">
                          <div className="text-sm text-accent font-semibold mb-2">{event.period}</div>
                          <div className="text-3xl font-serif font-bold text-accent mb-2">{event.year}</div>
                          <h3 className="text-xl font-serif font-semibold mb-3">{event.title}</h3>
                          <p className="text-muted-foreground">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="hidden md:flex w-12 h-12 bg-accent rounded-full items-center justify-center z-10 shadow-lg">
                      <Icon name="Circle" size={16} className="text-accent-foreground" />
                    </div>
                    
                    <div className="flex-1"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="monuments" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 animate-fade-in">
            Памятники истории
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Архитектурное наследие, которое мы бережно храним
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {monuments.map((monument, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <Icon name="Landmark" size={64} className="text-accent/40" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-accent font-semibold mb-2">{monument.year}</div>
                  <h3 className="text-xl font-serif font-semibold mb-3">{monument.title}</h3>
                  <p className="text-muted-foreground">{monument.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 animate-fade-in">
            Культурные события
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мероприятия, посвящённые истории нашего края
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                title: 'Ежегодный исторический фестиваль',
                date: 'Июнь 2024',
                description: 'Реконструкция исторических событий и мастер-классы по традиционным ремёслам'
              },
              {
                title: 'День памяти героев',
                date: '9 мая',
                description: 'Торжественные мероприятия у мемориала воинской славы'
              },
              {
                title: 'Выставка старинных фотографий',
                date: 'Сентябрь 2024',
                description: 'Уникальные архивные снимки XIX-XX веков'
              },
            ].map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardContent className="p-6 flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Calendar" size={28} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-accent font-semibold mb-1">{event.date}</div>
                    <h3 className="text-xl font-serif font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 animate-fade-in">
            Фотогалерея
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Старинные фотографии из архива краеведческого музея
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-muted-foreground/40" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-serif font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm text-accent">{image.era}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">История родного края</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Сохраняя память о прошлом, мы создаём будущее
          </p>
          <div className="flex justify-center gap-6">
            <Icon name="Mail" size={24} className="cursor-pointer hover:text-accent transition-colors" />
            <Icon name="Phone" size={24} className="cursor-pointer hover:text-accent transition-colors" />
            <Icon name="MapPin" size={24} className="cursor-pointer hover:text-accent transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
