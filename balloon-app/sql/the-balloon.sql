create table invalid_colour(
    id serial not null primary key,
    color_names text not null,
    counts integer
        
);
create table valid_colour(
    id serial not null primary key,
    color_name text not null,
    counts integer
);
insert into invalid_colour(color_names) values ('Red');
insert into invalid_colour(color_names) values ('Blue');
insert into invalid_colour(color_names) values ('Yellow');
insert into invalid_colour(color_names) values ('Pink');
insert into invalid_colour(color_names) values ('Purple');

-- ALTER TABLE invalid_colour ADD CONSTRAINT uniq_desc_constraint UNIQUE (color_names);
