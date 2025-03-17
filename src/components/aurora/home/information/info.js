import Magnify from 'vue-material-design-icons/Magnify.vue';
import Calendar from 'vue-material-design-icons/Calendar.vue';
import School from 'vue-material-design-icons/School.vue';
import AlertCircle from 'vue-material-design-icons/AlertCircle.vue';
import Clock from 'vue-material-design-icons/Clock.vue';

const infoData = [
    {
        title: 'Mudanças de Horário',
        description: 'Fique por dentro das últimas atualizações nos horários das aulas e eventos do Instituto. Mudanças podem ocorrer devido a feriados, reuniões pedagógicas ou ajustes curriculares, então mantenha-se informado para evitar imprevistos e garantir sua presença em todas as atividades acadêmicas.',
        icon: Clock,
        color: '#FF5733',
        fontWeigth: 'bold'
    },
    {
        title: 'Olimpíadas Estudantis',
        description: 'Participe das competições acadêmicas e esportivas oferecidas pelo IF. Seja nas olimpíadas de matemática, física, robótica ou nos torneios esportivos, essa é uma oportunidade única para se destacar, desenvolver habilidades, ganhar experiência e representar sua instituição em eventos regionais e nacionais.',
        icon: School,
        color: '#28A745',
        fontWeigth: 'normal'
    },
    {
        title: 'Segunda Chamada',
        description: 'Se você perdeu uma prova por motivo justificado, não se preocupe! O IF permite a solicitação de segunda chamada para avaliações. Saiba quais documentos são necessários, os prazos para requerimento e como garantir sua participação para manter seu desempenho acadêmico sem prejuízos.',
        icon: AlertCircle,
        color: '#FFC107',
        fontWeigth: 'lighter'
    },
    {
        title: 'Sábados Letivos',
        description: 'Os sábados letivos fazem parte do calendário acadêmico e são fundamentais para reposições de aulas e atividades pedagógicas. Confira o cronograma atualizado, programe-se com antecedência e aproveite essas oportunidades para aprofundar seus estudos.',
        icon: Calendar,
        color: '#007BFF',
        fontWeigth: 'bold'
    },
    {
        title: 'Primeiros Passos',
        description: 'Se você é calouro no Instituto Federal, este guia rápido irá te ajudar a entender o funcionamento da instituição. Descubra como acessar os sistemas acadêmicos, onde buscar informações sobre disciplinas, horários, professores e serviços essenciais para sua jornada universitária.',
        icon: Magnify,
        color: '#6F42C1',
        fontWeigth: 'normal'
    }
];

export default infoData;
