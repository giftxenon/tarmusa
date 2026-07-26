import React, { useState, useEffect } from 'react';
import {
  ThemeProvider, CssBaseline,
  AppBar, Toolbar, Box, Container, Typography, Button,
  Grid, Card, CardContent, CardActions,
  Chip, Paper, TextField, IconButton, Drawer, List, ListItem,
  ListItemText, Divider, Avatar, Stack, useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SchoolIcon from '@mui/icons-material/School';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import InventoryIcon from '@mui/icons-material/Inventory';
import ScienceIcon from '@mui/icons-material/Science';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SendIcon from '@mui/icons-material/Send';
import theme from './theme';

// ── nav links used in Navbar + Footer ──
const NAV_LINKS = ['Home', 'About', 'Products', 'Services', 'Team', 'Contact'];

// ============================================================
// FADE-IN WRAPPER  (no extra lib needed)
// ============================================================
function FadeIn({ children, delay = 0, sx = {} }) {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), delay); return () => clearTimeout(t); }, [delay]);
  return (
    <Box sx={{
      opacity: on ? 1 : 0,
      transform: on ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      ...sx,
    }}>
      {children}
    </Box>
  );
}

// ============================================================
// SECTION TAG  (reusable labelled chip)
// ============================================================
function SectionTag({ label, light }) {
  return (
    <Chip label={label} size="small" sx={{
      mb: 1.5,
      background: light ? 'rgba(255,255,255,0.15)' : 'rgba(127,179,71,0.14)',
      color: light ? 'rgba(255,255,255,0.9)' : '#4a7c4a',
      fontWeight: 600, fontSize: '0.75rem',
      letterSpacing: '0.12em', textTransform: 'uppercase',
    }} />
  );
}

// ============================================================
// NAVBAR
// ============================================================
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <AppBar position="fixed" sx={{
        background: scrolled ? 'rgba(26,46,26,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
        py: scrolled ? 0.5 : 1, transition: 'all 0.3s ease',
      }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>

            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* ADD LOGO: replace emoji with <Box component="img" src="/images/logo.png" sx={{ height:40 }} /> */}
              <Typography fontSize="1.9rem" lineHeight={1}>🍄</Typography>
              <Box>
                <Typography sx={{ fontFamily: '"Playfair Display",serif', color: 'white', fontSize: '1.2rem', lineHeight: 1.1 }}>
                Tarmushi
                </Typography>
                <Typography sx={{ color: '#7fb347', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Mushrooms
                </Typography>
              </Box>
            </Box>

            {/* Desktop links */}
            {!mobile && (
              <Stack direction="row" spacing={3.5}>
                {NAV_LINKS.map(l => (
                  <Typography key={l} component="a" href={`#${l.toLowerCase()}`} sx={{
                    color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', fontWeight: 500,
                    textDecoration: 'none', position: 'relative',
                    '&:hover': { color: 'white' },
                    '&::after': { content:'""', position:'absolute', bottom:-4, left:0, width:0, height:'2px', background:'#7fb347', transition:'width 0.3s ease' },
                    '&:hover::after': { width:'100%' },
                  }}>{l}</Typography>
                ))}
              </Stack>
            )}

            {/* Hamburger */}
            {mobile && (
              <IconButton onClick={() => setOpen(true)} sx={{ color: 'white' }}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}
        PaperProps={{ sx: { background: 'rgba(10,25,10,0.97)', width: '75vw', maxWidth: 300 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton onClick={() => setOpen(false)} sx={{ color: 'white' }}><CloseIcon /></IconButton>
        </Box>
        <List sx={{ mt: 4 }}>
          {NAV_LINKS.map(l => (
            <ListItem key={l} component="a" href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)} sx={{ py: 1.5, textDecoration: 'none', cursor: 'pointer' }}>
              <ListItemText primary={l}
                primaryTypographyProps={{ sx: { color: 'white', fontSize: '1.2rem', fontFamily: '"Playfair Display",serif' } }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

// ============================================================
// HERO
// ============================================================
function Hero() {
  return (
    <Box id="home" component="section" sx={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', pt: '7rem', pb: '4rem', px: 3, position: 'relative',
      background: `
        linear-gradient(to bottom right, rgba(10,30,10,0.84), rgba(26,46,26,0.66)),
        url('/tarmusaPics/mushroomMetaAI.jpeg')    center/cover no-repeat
      `,
    }}>
      {/* Radial glow */}
      <Box sx={{ position:'absolute', inset:0, pointerEvents:'none',
        background:'radial-gradient(ellipse at 60% 40%, rgba(127,179,71,0.09) 0%, transparent 60%)' }} />

      <FadeIn delay={100} sx={{ position: 'relative', zIndex: 2, maxWidth: 780 }}>
        <Chip label="🌿 Grown in Lukwanga, Wakiso" sx={{
          mb: 3, background: 'rgba(127,179,71,0.18)',
          border: '1px solid rgba(127,179,71,0.4)', color: '#7fb347', fontWeight: 500,
        }} />

        <Typography variant="h1" sx={{
          fontSize: { xs: '3.5rem', sm: '5.5rem', md: '7rem' },
          color: 'white', lineHeight: 1, letterSpacing: '-0.02em', mb: 0.5,
        }}>
          Tarmushi
        </Typography>
        <Typography variant="h2" sx={{
          fontStyle: 'italic', fontWeight: 400, color: '#7fb347', mb: 2.5,
          fontSize: { xs: '1.6rem', sm: '2.5rem', md: '3rem' },
        }}>
          Mushrooms
        </Typography>
        <Typography sx={{
          color: 'rgba(255,255,255,0.78)', maxWidth: 560, mx: 'auto', mb: 4, lineHeight: 1.85,
          fontSize: { xs: '0.95rem', md: '1.1rem' },
        }}>
          Uganda's premium mushroom farm — growing, training, and supplying fresh Oyster &amp; Button mushrooms from the heart of Lukwanga.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button variant="contained" size="large" href="#products">Shop Now</Button>
          <Button variant="outlined" size="large" href="#services" sx={{
            borderColor: 'rgba(255,255,255,0.6)', color: 'white',
            '&:hover': { borderColor: 'white', background: 'rgba(255,255,255,0.1)' },
          }}>
            Our Services
          </Button>
        </Stack>
      </FadeIn>

      {/* Scroll hint */}
      <Box sx={{ position:'absolute', bottom:32, left:'50%', transform:'translateX(-50%)', textAlign:'center' }}>
        <Typography sx={{ color:'rgba(255,255,255,0.45)', fontSize:'0.7rem', letterSpacing:'0.15em', textTransform:'uppercase', mb:1 }}>
          Scroll
        </Typography>
        <Box sx={{
          width:1, height:40, background:'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)', mx:'auto',
          animation:'scrollPulse 2s ease-in-out infinite',
          '@keyframes scrollPulse':{ '0%,100%':{ opacity:0.3 }, '50%':{ opacity:1 } },
        }} />
      </Box>
    </Box>
  );
}

// ============================================================
// ABOUT
// ============================================================
function About() {
  const stats = [
    { value:'2',    label:'Mushroom Varieties' },
    { value:'6+',   label:'Products & Services' },
    { value:'100%', label:'Naturally Grown' },
  ];
  return (
    <Box id="about" component="section" sx={{ py:{ xs:8, md:12 }, background:'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs:5, md:10 }} alignItems="center">

          {/* Image */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position:'relative' }}>
              <Box component="img" src="/tarmusaPics/ButtonMush.jpeg" sx={{
               width:'100%', aspectRatio:'4/5',
               objectFit:'cover', borderRadius:4
               }} />

              <Paper elevation={8} sx={{
                position:'absolute', bottom:-24, right:-24,
                background:'#1a2e1a', color:'white', p:2, borderRadius:3, minWidth:150,
              }}>
                <Typography variant="h6" sx={{ fontFamily:'"Playfair Display",serif', fontSize:'1.05rem' }}>
                  Est. Lukwanga
                </Typography>
                <Typography sx={{ fontSize:'0.75rem', opacity:0.65 }}>Wakiso District, Uganda</Typography>
              </Paper>
            </Box>
          </Grid>

          {/* Text */}
          <Grid item xs={12} md={7}>
            <SectionTag label="Who We Are" />
            <Typography variant="h2" sx={{ mb:2.5, color:'#1a2e1a', fontSize:{ xs:'2rem', md:'2.75rem' } }}>
              Passionate About{' '}
              <Box component="em" sx={{ color:'#4a7c4a', fontStyle:'italic' }}>Mushroom Farming</Box>
            </Typography>
            <Typography sx={{ color:'#6b7c6b', mb:2, lineHeight:1.8 }}>
              Tarmushi Mushrooms is a leading farm based in Lukwanga, Wakiso. We specialize in cultivating premium{' '}
              <strong>Oyster mushrooms</strong> and <strong>Button mushrooms</strong> using sustainable, high-quality practices.
            </Typography>
            <Typography sx={{ color:'#6b7c6b', mb:4, lineHeight:1.8 }}>
              Beyond growing, we empower communities through training, supply farmers with inputs, and manage farms on behalf of clients.
            </Typography>
            <Divider sx={{ mb:3, borderColor:'#ede4d0' }} />
            <Stack direction="row" spacing={4}>
              {stats.map(s => (
                <Box key={s.label}>
                  <Typography variant="h3" sx={{ color:'#4a7c4a', fontSize:'2.5rem', lineHeight:1 }}>{s.value}</Typography>
                  <Typography sx={{ fontSize:'0.82rem', color:'#6b7c6b', mt:0.5 }}>{s.label}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}

// ============================================================
// VARIETIES
// ============================================================
const VARIETIES = [
  {
    name: 'Oyster Mushrooms',
    sci: 'Pleurotus ostreatus',
    icon: '🍄',
    bg: 'linear-gradient(135deg,#e8f3e0,#d4ebbc)',
    desc: 'Our primary crop — velvety, flavourful, and highly nutritious. Grown on cotton husk substrate for peak quality.',
    features: ['High protein content', 'Fast fruiting cycle', 'Ideal for East African cuisine'],
    imgSrc: '/tarmusaPics/packedOysters.jpeg',
  },
  {
    name: 'Button Mushrooms',
    sci: 'Agaricus bisporus',
    icon: '⚪',
    bg: 'linear-gradient(135deg,#f3ede0,#e8dcc8)',
    desc: 'Classic, mild, and versatile. Loved worldwide and perfect for everyday cooking and restaurants.',
    features: ['Rich umami flavour', 'Long shelf life', 'Widely used in local markets'],
    imgSrc: '/tarmusaPics/ButtonMush.jpeg',
  },
];

function Varieties() {
  return (
    <Box component="section" sx={{ py:{ xs:8, md:12 }, background:'#f5f0e8' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign:'center', mb:6 }}>
          <SectionTag label="What We Grow" />
          <Typography variant="h2" sx={{ color:'#1a2e1a', fontSize:{ xs:'2rem', md:'2.75rem' } }}>
            Our Mushroom Varieties
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {VARIETIES.map((v, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Card sx={{ overflow: 'hidden', height: '100%' }}>
                {v.imgSrc ? (
                  <Box
                    component="img"
                    src={v.imgSrc}
                    alt={v.name}
                    sx={{ width: '100%', height: 220, objectFit: 'cover' }}
                  />
                ) : (
                  <Paper elevation={0} sx={{
                    height: 220, background: v.bg,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1,
                    borderBottom: '2px dashed rgba(139,98,66,0.2)',
                  }}>
                    <Typography fontSize="2.5rem">{v.icon}</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#8b6242' }}>📸 Add {v.name} Photo</Typography>
                  </Paper>
                )}
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h4" sx={{ color: '#1a2e1a', mb: 0.5 }}>{v.name}</Typography>
                  <Typography sx={{ color: '#7fb347', fontSize: '0.85rem', fontStyle: 'italic', mb: 1.5 }}>{v.sci}</Typography>
                  <Typography sx={{ color: '#6b7c6b', mb: 2, fontSize: '0.95rem' }}>{v.desc}</Typography>
                  <Stack spacing={0.75}>
                    {v.features.map(f => (
                      <Box key={f} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CheckCircleOutlineIcon sx={{ color: '#4a7c4a', fontSize: '1rem' }} />
                        <Typography sx={{ fontSize: '0.9rem', color: '#4a7c4a', fontWeight: 500 }}>{f}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ============================================================
// PRODUCTS
// ============================================================
const PRODUCTS = [
  {
    icon: '🍄',
    name: 'Oyster Mushrooms',
    tag: 'Fresh Produce',
    imgSrc: '/tarmusaPics/packedOysters.jpeg',
    desc: 'Fresh, tender oyster mushrooms harvested daily. Rich in nutrients and perfect for any cuisine.'
  },
  {
    icon: '⚪',
    name: 'Button Mushrooms',
    tag: 'Fresh Produce',
    imgSrc: '/tarmusaPics/ButtonMush.jpeg',
    desc: 'Plump, creamy button mushrooms — ideal for soups, salads, stir-fries, and everyday cooking.'
  },
  {
    icon: '🌱',
    name: 'Mushroom Spawns',
    tag: 'Farm Inputs',
    imgSrc: '/tarmusaPics/MushroomStructure.jpeg',
    desc: 'High-quality spawns for Oyster and Button varieties. Perfect for starting your own mushroom farm.'
  },
  {
    icon: '🪴',
    name: 'Ready Mushroom Gardens',
    tag: 'Starter Kits',
    imgSrc: '/tarmusaPics/oysterOngardens.jpeg',
    desc: 'Pre-prepared growing kits ready for fruiting. Add water and start harvesting within days!'
  },
  {
    icon: '🧵',
    name: 'Cotton Husks (Substrate)',
    tag: 'Growing Medium',
    imgSrc: '/tarmusaPics/Truckcottonhusks.jpeg',
    desc: 'Premium cotton husks — the ideal substrate for cultivating healthy, productive mushroom blocks.'
  },
];

function Products() {
  return (
    <Box id="products" component="section" sx={{ py:{ xs:8, md:12 }, background:'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign:'center', mb:6 }}>
          <SectionTag label="What We Sell" />
          <Typography variant="h2" sx={{ color:'#1a2e1a', mb:1.5, fontSize:{ xs:'2rem', md:'2.75rem' } }}>
            Our Products
          </Typography>
          <Typography sx={{ color:'#6b7c6b', maxWidth:520, mx:'auto' }}>
            From fresh mushrooms to farm inputs — everything you need, straight from the source.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {PRODUCTS.map((p, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ height:'100%', display:'flex', flexDirection:'column', background:'#f5f0e8' }}>
                <Box sx={{ position:'relative' }}>
                  <Box
                    component="img"
                    src={p.imgSrc}
                    alt={p.name}
                    sx={{
                      width: '100%',
                      height: 190,
                      objectFit: 'cover',
                    }}
                  />
                  <Chip label={p.tag} size="small" sx={{
                    position:'absolute', top:12, left:12,
                    background:'#1a2e1a', color:'#7fb347', fontWeight:600, fontSize:'0.7rem',
                  }} />
                </Box>
                <CardContent sx={{ flexGrow:1, p:2.5 }}>
                  <Typography variant="h5" sx={{ color:'#1a2e1a', mb:1, fontSize:'1.1rem' }}>{p.name}</Typography>
                  <Typography sx={{ color:'#6b7c6b', fontSize:'0.88rem', lineHeight:1.7 }}>{p.desc}</Typography>
                </CardContent>
                <CardActions sx={{ px:2.5, pb:2.5 }}>
                  <Typography component="a" href="#contact" sx={{
                    color:'#4a7c4a', fontWeight:600, fontSize:'0.9rem',
                    borderBottom:'2px solid #7fb347', textDecoration:'none', pb:0.25,
                    '&:hover':{ color:'#1a2e1a' },
                  }}>
                    Order Now →
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ============================================================
// SERVICES
// ============================================================
const SERVICES = [
  { Icon:SchoolIcon,      title:'Mushroom Growing Training', desc:'Hands-on training for individuals and groups. Learn the full cultivation process — substrate prep to harvesting.' },
  { Icon:AgricultureIcon, title:'Farm Management',           desc:"Don't have time? We manage mushroom farms on behalf of clients, handling all operations professionally." },
  { Icon:InventoryIcon,   title:'Input Supply',              desc:'All essential inputs: spawns, cotton husks, and ready mushroom gardens at competitive prices.' },
  { Icon:ScienceIcon,     title:'Technical Consultation',    desc:'Expert advisory on species selection, substrate optimisation, disease control, and yield improvement.' },
];

function Services() {
  return (
    <Box id="services" component="section" sx={{
      py:{ xs:8, md:12 },
      background:'linear-gradient(135deg,#1a2e1a 0%,#2d4a2d 100%)',
      position:'relative', overflow:'hidden',
      '&::before':{ content:'"🍄"', position:'absolute', fontSize:'20rem', opacity:0.03, top:'-4rem', right:'-4rem' },
    }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign:'center', mb:6 }}>
          <SectionTag label="What We Do" light />
          <Typography variant="h2" sx={{ color:'#f5f0e8', mb:1.5, fontSize:{ xs:'2rem', md:'2.75rem' } }}>
            Our Services
          </Typography>
          <Typography sx={{ color:'rgba(255,255,255,0.6)', maxWidth:520, mx:'auto' }}>
            We go beyond selling — we build mushroom farming capacity across Uganda.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {SERVICES.map(({ Icon, title, desc }, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Paper elevation={0} sx={{
                background:'rgba(255,255,255,0.07)',
                border:'1px solid rgba(255,255,255,0.12)',
                borderRadius:4, p:3.5, height:'100%',
                transition:'all 0.3s ease',
                '&:hover':{ background:'rgba(255,255,255,0.12)', transform:'translateY(-4px)' },
              }}>
                <Avatar sx={{ background:'rgba(127,179,71,0.2)', mb:2, width:52, height:52 }}>
                  <Icon sx={{ color:'#7fb347', fontSize:'1.5rem' }} />
                </Avatar>
                <Typography variant="h5" sx={{ color:'#f5f0e8', mb:1.25, fontSize:'1.15rem' }}>{title}</Typography>
                <Typography sx={{ color:'rgba(255,255,255,0.6)', fontSize:'0.9rem', lineHeight:1.75 }}>{desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ============================================================
// TEAM
// ============================================================
const TEAM = [
  { name:'Musa Mugerwa',    role:'Director',          initials:'MM', imgSrc:'/dist/tarmusaPics/managingDirector.jpeg', bio:'Founder and visionary behind Tarmushi Mushrooms. Leads strategic direction and community outreach.' },
  { name:'Managing Director', role:'Managing Director', initials:'MD', imgSrc:null, bio:'Oversees daily operations, quality control, and farm management — ensuring the highest standards.' },
  { name:'Secretary',       role:'Secretary',          initials:'SC', imgSrc:null, bio:'Handles administration, client communications, and coordinates training programs and consultations.' },
];

function Team() {
  return (
    <Box id="team" component="section" sx={{ py:{ xs:8, md:12 }, background:'#f5f0e8' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign:'center', mb:6 }}>
          <SectionTag label="The People" />
          <Typography variant="h2" sx={{ color:'#1a2e1a', mb:1.5, fontSize:{ xs:'2rem', md:'2.75rem' } }}>
            Meet Our Team
          </Typography>
          <Typography sx={{ color:'#6b7c6b', maxWidth:500, mx:'auto' }}>
            The dedicated individuals growing Tarmushi Mushrooms forward.
          </Typography>
        </Box>
        <Grid container spacing={3} justifyContent="center">
          {TEAM.map((m, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ textAlign:'center', overflow:'hidden' }}>
                <Box sx={{ aspectRatio:'1', overflow:'hidden' }}>
                  {m.imgSrc
                    ? <Box component="img" src={m.imgSrc} alt={m.name}
                        sx={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top' }} />
                    : (
                      <Box sx={{
                        width:'100%', height:'100%', minHeight:200,
                        background:'linear-gradient(135deg,#2d4a2d,#1a2e1a)',
                        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:1,
                      }}>
                        <Typography sx={{ fontFamily:'"Playfair Display",serif', color:'#7fb347', fontSize:'2.5rem', fontWeight:700 }}>
                          {m.initials}
                        </Typography>
                        <Typography sx={{ color:'rgba(255,255,255,0.4)', fontSize:'0.7rem' }}>📸 Add Photo</Typography>
                      </Box>
                    )
                  }
                </Box>
                <CardContent sx={{ p:2.5 }}>
                  <Typography variant="h5" sx={{ color:'#1a2e1a', mb:0.5, fontSize:'1.1rem' }}>{m.name}</Typography>
                  <Chip label={m.role} size="small" sx={{
                    mb:1.5, background:'rgba(127,179,71,0.12)', color:'#4a7c4a',
                    fontSize:'0.75rem', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.07em',
                  }} />
                  <Typography sx={{ color:'#6b7c6b', fontSize:'0.88rem', lineHeight:1.7 }}>{m.bio}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ============================================================
// CONTACT
// ============================================================
const CONTACT_ITEMS = [
  { Icon:LocationOnIcon, label:'Location',       value:'Lukwanga, Wakiso District, Uganda',  href:null },
  { Icon:PhoneIcon,      label:'Phone / WhatsApp',value:'+256 706 740 761',                href:'tel:+256 788 740 761' },
  { Icon:EmailIcon,      label:'Email',           value:'tarmushimushrooms@gmail.com',       href:'mailto:tarmushimushrooms@gmail.com' },
  { Icon:AccessTimeIcon, label:'Working Hours',   value:'Mon – Sat: 8:00 AM – 6:00 PM',    href:null },
];

function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [sent, setSent] = useState(false);
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // TODO: wire up EmailJS or Formspree here
    setSent(true);
  };

  return (
    <Box id="contact" component="section" sx={{
      py:{ xs:8, md:12 },
      background:'linear-gradient(135deg,#2d4a2d 0%,#1e3a1e 100%)',
    }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign:'center', mb:6 }}>
          <SectionTag label="Get In Touch" light />
          <Typography variant="h2" sx={{ color:'#f5f0e8', mb:1.5, fontSize:{ xs:'2rem', md:'2.75rem' } }}>
            Contact Us
          </Typography>
          <Typography sx={{ color:'rgba(255,255,255,0.6)', maxWidth:520, mx:'auto' }}>
            Order mushrooms, request training, or ask us anything — we're happy to hear from you.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="flex-start">

          {/* Details */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              {CONTACT_ITEMS.map(({ Icon, label, value, href }) => (
                <Box key={label} sx={{ display:'flex', gap:2, alignItems:'flex-start' }}>
                  <Avatar sx={{ background:'rgba(127,179,71,0.2)', width:44, height:44 }}>
                    <Icon sx={{ color:'#7fb347', fontSize:'1.2rem' }} />
                  </Avatar>
                  <Box>
                    <Typography sx={{ color:'#f5f0e8', fontWeight:600, fontSize:'0.9rem', mb:0.25 }}>{label}</Typography>
                    {href
                      ? <Typography component="a" href={href} sx={{ color:'rgba(255,255,255,0.6)', fontSize:'0.9rem', textDecoration:'none', '&:hover':{ color:'#7fb347' } }}>{value}</Typography>
                      : <Typography sx={{ color:'rgba(255,255,255,0.6)', fontSize:'0.9rem' }}>{value}</Typography>
                    }
                  </Box>
                </Box>
              ))}
            </Stack>

            {/* ADD GOOGLE MAP: replace Paper below with an <iframe> embed for Gayaza, Wakiso */}
            <Paper elevation={0} sx={{
              mt:4, p:3, borderRadius:3, textAlign:'center',
              background:'rgba(255,255,255,0.06)',
              border:'2px dashed rgba(255,255,255,0.2)',
            }}>
              <Typography sx={{ color:'rgba(255,255,255,0.45)', fontSize:'0.85rem', lineHeight:2 }}>
                📍 Add Google Maps Embed Here<br />
                <Box component="small" sx={{ fontSize:'0.75rem' }}>Lukwanga, Wakiso, Uganda</Box>
              </Typography>
            </Paper>
          </Grid>

          {/* Form */}
          <Grid item xs={12} md={7}>
            <Paper elevation={8} sx={{ borderRadius:4, p:{ xs:3, md:4 } }}>
              {sent ? (
                <Box sx={{ textAlign:'center', py:5 }}>
                  <Typography fontSize="3rem" mb={1}>✅</Typography>
                  <Typography variant="h4" sx={{ color:'#1a2e1a', mb:1 }}>Message Sent!</Typography>
                  <Typography sx={{ color:'#6b7c6b' }}>Thank you! We'll get back to you shortly.</Typography>
                </Box>
              ) : (
                <Box component="form" onSubmit={onSubmit}>
                  <Stack spacing={2.5}>
                    <TextField label="Your Name"      name="name"    value={form.name}    onChange={onChange} required fullWidth placeholder="John Doe" />
                    <TextField label="Email Address"  name="email"   value={form.email}   onChange={onChange} required fullWidth type="email" placeholder="you@example.com" />
                    <TextField label="Message"        name="message" value={form.message} onChange={onChange} required fullWidth multiline rows={5} placeholder="Tell us what you need..." />
                    <Button type="submit" variant="contained" size="large" fullWidth endIcon={<SendIcon />}>
                      Send Message
                    </Button>
                  </Stack>
                </Box>
              )}
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  return (
    <Box component="footer" sx={{ background:'#111b11', py:{ xs:6, md:8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb:5 }}>

          {/* Brand */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display:'flex', alignItems:'center', gap:1, mb:2 }}>
              <Typography fontSize="2rem">🍄</Typography>
              <Box>
                <Typography sx={{ fontFamily:'"Playfair Display",serif', color:'white', fontSize:'1.15rem', lineHeight:1.1 }}>Tarmushi</Typography>
                <Typography sx={{ color:'#7fb347', fontSize:'0.65rem', letterSpacing:'0.1em', textTransform:'uppercase' }}>Mushrooms</Typography>
              </Box>
            </Box>
            <Typography sx={{ color:'rgba(255,255,255,0.45)', fontSize:'0.9rem', maxWidth:280, lineHeight:1.8 }}>
              Cultivating excellence from Lukwanga, Wakiso — Uganda's trusted mushroom farm.
            </Typography>
          </Grid>

          {/* Links */}
          <Grid item xs={6} md={3}>
            <Typography sx={{ color:'#7fb347', fontSize:'0.78rem', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:600, mb:2 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {NAV_LINKS.map(l => (
                <Typography key={l} component="a" href={`#${l.toLowerCase()}`} sx={{
                  color:'rgba(255,255,255,0.5)', fontSize:'0.9rem', textDecoration:'none', '&:hover':{ color:'#7fb347' },
                }}>{l}</Typography>
              ))}
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography sx={{ color:'#7fb347', fontSize:'0.78rem', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:600, mb:2 }}>
              Contact Info
            </Typography>
            <Stack spacing={1.25}>
              {[
                { icon:'📍', text:'Lukwanga, Wakiso, Uganda',          href:null },
                { icon:'📞', text:'+256 706 740 761',                href:'tel:+256788740761' },
                { icon:'✉️', text:'tarmushimushrooms@gmail.com',       href:'mailto:tarmushirooms@gmail.com' },
              ].map(item => (
                <Box key={item.text} sx={{ display:'flex', gap:1, alignItems:'center' }}>
                  <Typography fontSize="0.9rem">{item.icon}</Typography>
                  {item.href
                    ? <Typography component="a" href={item.href} sx={{ color:'rgba(255,255,255,0.5)', fontSize:'0.88rem', textDecoration:'none', '&:hover':{ color:'#7fb347' } }}>{item.text}</Typography>
                    : <Typography sx={{ color:'rgba(255,255,255,0.5)', fontSize:'0.88rem' }}>{item.text}</Typography>
                  }
                </Box>
              ))}
            </Stack>
          </Grid>

        </Grid>

        <Divider sx={{ borderColor:'rgba(255,255,255,0.08)', mb:3 }} />
        <Typography sx={{ color:'rgba(255,255,255,0.28)', fontSize:'0.85rem', textAlign:'center' }}>
          © {new Date().getFullYear()} Tarmushi Mushrooms. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

// ============================================================
// ROOT APP
// ============================================================
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Varieties />
      <Products />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}