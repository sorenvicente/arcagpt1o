create table if not exists public.prompt_blocks (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  description text,
  prompt text not null,
  category text
);

-- Habilitar RLS
alter table public.prompt_blocks enable row level security;

-- Criar política para permitir inserções para todos os usuários
create policy "Enable insert for all users" on public.prompt_blocks
  for insert
  to public
  with check (true);

-- Criar política para permitir leitura para todos os usuários
create policy "Enable read for all users" on public.prompt_blocks
  for select
  to public
  using (true);