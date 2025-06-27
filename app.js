import { createClient } from '@supabase/supabase-js';

// Substitua pelos dados do seu projeto
const supabase = createClient('https://ekzjsqheinpvebjfjims.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrempzcWhlaW5wdmViamZqaW1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5OTIzNDMsImV4cCI6MjA2NjU2ODM0M30.HrBFnV6ve6po2GeitFXs55ensNljsXs-1aSVwdKHDDA');

// Exemplo de uso: buscar dados da tabela "prospects"
const fetchProspects = async () => {
  const { data, error } = await supabase
    .from('prospects')
    .select('*');

  if (error) {
    console.error('Erro ao buscar dados:', error);
  } else {
    console.log('Dados dos prospects:', data);
  }
};

fetchProspects()
